проект задеплоен на heroku.com<br/>
в папке client есть папка гит, которая связана с heroku 
в папке server есть тоже папка гит, которая связана с heroku
Для закидования файлов на heroku нужно:
 * в папки гит переименовать в .git;
 * сделать нужные обновления;
 * выполнить след. код в терминале для каждой папке отдельно(client/server):
   $ git add .
   $ git commit -am "make it better"
   $ git push heroku master