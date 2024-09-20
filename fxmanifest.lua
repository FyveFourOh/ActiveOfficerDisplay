fx_version 'cerulean'
games { 'rdr3', 'gta5' }

author 'Niko <FyveFourOh@gmail.com>'
description 'Hud element that indicates how many law enforcement officers are on duty, also allows for onduty permissions through discord roles.'
version '0.9.0'


client_script 'client/Client.net.dll'


server_scripts {
    'server/Server.net.dll',
    'nui/js/bot/bot.js'
}

shared_script 'shared/Shared.net.dll'

ui_page 'nui/index.html'


files {
    'Newtonsoft.Json.dll',
    'config/config.ini',
    'nui/index.html',
    'nui/js/listener.js',
    'nui/css/style.css',
    'nui/images/*'
}

dependencies {
    '/server:4890',
    'yarn'
}
