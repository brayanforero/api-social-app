import "@babel/polyfill";
import app from './app'

function main(){
  app.listen(app.get('port'), () => {
    console.log('Servidor funcionando en el puerto' + app.get('port') );
  });
}

main()