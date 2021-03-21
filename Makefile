SHELL := /bin/bash
default: help

help: ## Show this help
	@IFS=$$'\n' ; \
    help_lines=(`fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##/:/'`); \
    printf "%-30s %s\n" "target" "help" ; \
    printf "%-30s %s\n" "------" "----" ; \
    for help_line in $${help_lines[@]}; do \
        IFS=$$':' ; \
        help_split=($$help_line) ; \
        help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
        help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
        printf '\033[36m'; \
        printf "%-30s %s" $$help_command ; \
        printf '\033[0m'; \
        printf "%s\n" $$help_info; \
    done

start: ## Ensure backed is running, create local tunnel, run application
	@curl -I http://127.0.0.1:8000 >/dev/null 2>&1 || (echo "ERROR: API must be running on http://127.0.0.1:8000"; exit 1)
	@node_modules/localtunnel/bin/lt.js --port 8000 --subdomain simple-memorizer-api >/dev/null 2>&1 &
	@printf "\033[1m===========================================================\033[0m \n"
	@printf "\033[1m API available on https://simple-memorizer-api.loca.lt \n"
	@printf "\033[1m Open it once in the browser in case of JSON parsing errors \n"
	@printf "\033[1m===========================================================\033[0m \n"
	@npm start
