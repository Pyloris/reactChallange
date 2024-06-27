# Auth App

<img src="../Screenshots/Auth1.png" alt="Dice Game Home Page"/>
<img src="../Screenshots/Auth2.png" alt="Dice Game Play Page"/>
<img src="../Screenshots/Auth3.png" alt="Dice Game Example Page"/>

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
git sparse-checkout set "Auth"

# pull it from remote
git pull origin master
```

STEP 3:

```shell
cd Auth

npm install

npm run dev
```