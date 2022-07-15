upload :
	rclone sync . d-o:/mnt/HC_Volume_15221660/sites/degruchy.org/ --quiet --exclude ".git**" --exclude ".vscode**" --exclude "*.code-workspace" --exclude ".editorconfig" --exclude "Makefile" --delete-excluded --progress --auto-confirm
