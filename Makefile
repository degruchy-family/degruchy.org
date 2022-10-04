upload :
	rclone sync . d-o-aws:degruchy-website/ --quiet --exclude ".git**" --exclude ".vscode**" --exclude "*.code-workspace" --exclude ".editorconfig" --exclude "Makefile" --delete-excluded --auto-confirm
