upload :
	rclone sync . d-o-aws:degruchy-website/ --quiet --exclude ".git**" --exclude ".vscode**" --exclude "*.code-workspace" --exclude ".editorconfig" --exclude "Makefile" --delete-excluded --auto-confirm
	aws cloudfront create-invalidation --distribution-id $(CLOUDFRONT_ID) --paths=/\*
