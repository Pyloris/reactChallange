# Contact App
> This website is just a single page site, built with React + TailwindCSS.

<img src="../Screenshots/contact-App.png" width="200px">
<img src="../Screenshots/contact-App2.png" width="200px">

## To Install
To download just this folder, you can use `git sparse-checkout`.

STEP 1:

```shell
mkdir <repo_name>
cd <repo_name>
git init
git remote add -f origin <repo_url>
```

STEP 2:
```shell
git sparse-checkout init

# set the folder name you want git to download
git sparse-checkout set "Contact-App"

# pull it from remote
git pull origin master
```

STEP 3:

```shell
cd Contact-App

npm install

npm run dev
```