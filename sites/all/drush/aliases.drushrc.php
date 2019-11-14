<?php

$aliases['dev'] = array(
	'uri'=> 'inmotion.ccistaging.com',
	'root' => '/home/staging/subdomains/inmotion/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
		'%drush-script' => '/home/staging/.composer/vendor/bin/drush'
	)
);

