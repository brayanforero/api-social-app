import '@babel/polyfill'
import app from './app'

function main() {
  app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT ' + app.get('port'))
  })
}

main()
