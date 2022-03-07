wipe:
	@echo "Cleaning the project ..."
	@find . -name "*error.log" -type f -delete
	@find . -name "*debug.log" -type f -delete
	@find . -name ".eslintcache" -type f -delete
	@find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
	@find ./build ! -name '.gitkeep' -type f -exec rm -f {} +
	@find . -name ".cache-loader" -type d -prune -exec rm -rf '{}' +
	@find . -name "coverage" -type d -prune -exec rm -rf '{}' +
	@find . -name ".changelog" -type d -prune -exec rm -rf '{}' +

clean: wipe
	@echo "Installing dependencies ..."
	@npm install
	@echo "... done"
