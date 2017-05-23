var http = require('http')
  , exec = require('exec')

const PORT = 9988
  , PATH = '/var/www/ghost-0.11.3/content/themes/ano/'

var deployServer = http.createServer(function(request, response) {
  if (request.url.search(/deploy\/?$/i) > 0) {

    var commands = [
      'cd ' + PATH,
      'git pull',
      'pm2 restart ghost'
    ].join(' && ')

    exec(commands, function(err, out, code) {
      if (err instanceof Error) {
        response.writeHead(500)
        response.end('Server Internal Error.')
        throw err
      }
      process.stderr.write(err)
      process.stdout.write(out)
      response.writeHead(200)
      response.end('Deploy Done.')

    })

  } else {

    response.writeHead(404)
    response.end('Not Found.')

  }
})

deployServer.listen(PORT)