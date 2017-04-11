#!/bin/bash
# Coloque esse arquivo em qualquer pasta, que o script faz o resto.
cls
echo "Informe seu user do github:"
read user;
echo "Informe seu e-mail do github "
read email;
echo "Informe sua senha do github "
read -s senha;
# Configura name e email do user utilizado no github
git config --global user.name "$user"
git config --global user.email "$email"
git config --global user.senha "$senha"
mkdir trainning-order 
cd trainning-order
git init
# Desabilita verificação HTTP e SSL
git config http.sslVerify false
git remote add origin https://"$user":"$senha"@github.com/time07/trainning-order.git
git pull origin master
git checkout master
# Devido a falta do certificado, não é possivel instalar dependência do npm
npm set strict-ssl false
echo "instalando o bower"
npm install -g bower
npm install -g http-server
bower install
start sh.exe -c "http-server ${PWD}"
start sh.exe --login -i -c "git pull"
echo "Finalizado com sucesso!"
pause