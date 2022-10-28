upload :
	aws s3 sync . s3://degruchy-website --quiet --exclude ".git**" --exclude ".vscode**" --exclude "*.code-workspace" --exclude ".editorconfig" --exclude "Makefile"
	aws cloudfront create-invalidation --distribution-id $(CLOUDFRONT_ID) --paths=/\*
