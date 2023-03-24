/**
 * This file contains info about available Certbot DNS plugins.
 * This only works for plugins which use the standard argument structure, so:
 * --authenticator <plugin-name> --<plugin-name>-credentials <FILE> --<plugin-name>-propagation-seconds <number>
 *
 * File Structure:
 *
 *  {
 *    cloudflare: {
 *      display_name: "Name displayed to the user",
 *      package_name: "Package name in PyPi repo",
 *      version_requirement: "Optional package version requirements (e.g. ==1.3 or >=1.2,<2.0, see https://www.python.org/dev/peps/pep-0440/#version-specifiers)",
 *      dependencies: "Additional dependencies, space separated (as you would pass it to pip install)",
 *      credentials: `Template of the credentials file`,
 *      full_plugin_name: "The full plugin name as used in the commandline with certbot, e.g. 'dns-njalla'",
 *    },
 *    ...
 *  }
 *
 */

module.exports = {
	//####################################################//
	openstack: {
		display_name:        'OpenStack Designate',
		package_name:        'git+https://github.com/bbrfkr/certbot-dns-openstack',
		version_requirement: '',
		dependencies:        '',
		credentials:         '',
		full_plugin_name: 'dns-openstack',
	},
	rfc2136: {
		display_name:        'RFC 2136',
		package_name:        'certbot-dns-rfc2136',
		version_requirement: '==$(certbot --version | grep -Eo \'[0-9](\\.[0-9]+)+\')', // official plugin, use certbot version
		dependencies:        '',
		credentials:         `# Target DNS server
dns_rfc2136_server = 192.0.2.1
# Target DNS port
dns_rfc2136_port = 53
# TSIG key name
dns_rfc2136_name = keyname.
# TSIG key secret
dns_rfc2136_secret = 4q4wM/2I180UXoMyN4INVhJNi8V9BCV+jMw2mXgZw/CSuxUT8C7NKKFs AmKd7ak51vWKgSl12ib86oQRPkpDjg==
# TSIG key algorithm
dns_rfc2136_algorithm = HMAC-SHA512`,
		full_plugin_name: 'dns-rfc2136',
	},
};
