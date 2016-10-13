sudo kill -9 $(pidof nohup)	# kill nohup process
sudo kill -9 $(pidof node) 	# kill node process to stop the server
sudo git pull origin master 	# pull down the latest changes using git
sudo npm --prefix ./react/stockwatch install ./react/stockwatch #react
sudo npm --prefix ./angular install ./angular
sudo PORT=80 nohup npm --prefix ./react/stockwatch start & # run the server as a background process on port 80
sudo nohup npm --prefix ./angular start & # run the server as a background process on port 3000