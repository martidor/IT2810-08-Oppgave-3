sudo kill -9 $(pidof nohup)	# kill nohup process
sudo kill -9 $(pidof node) 	# kill node process to stop the server
sudo git pull origin master 	# pull down the latest changes using git
sudo npm --prefix ./stockwatch install ./stockwatch #react
sudo npm --prefix ./api install ./api #api
sudo nohup npm --prefix ./api start & # run the api a background process
sudo PORT=80 nohup npm --prefix ./stockwatch start & # run the server as a background process on port 80