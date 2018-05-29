# SixArm.com → Node → Markdown → Table of contents

Work in progress.

* [](#)

## Setup

Clone:

    $ git clone https://github.com/sixarm/sixarm_node_markdown_table_of_contents

Verify you have node and npm:

    $ node --version
    v10.2.1

    $ npm --version
    6.1.0

Run the repo tests:

    $ npm test



## Node install help

Install on macOS using brew:

    $ brew update
    $ brew install node

Install on Ubuntu or Debian using apt:

    $ sudo apt-get update
    $ sudo apt-get install nodejs
    $ sudo apt-get install npm

Install Mocha pacakges:

    $ npm install --global mocha
    $ npm install --save-dev mocha


### Troubleshooting


#### npm: command not found

Error:

  * npm: command not found

Try to reinstall node:

    $ brew update
    $ brew uninstall --global  --ignore-dependencies node
    $ brew prune
    $ brew install --global  node
    $ brew postinstall node


#### post-install step did not complete

Error: 

  * Warning: The post-install step did not complete successfully.

Try to prune node:

    $ brew prune


#### Permission denied  @ unlink_internal

Error:

  * Error: Permission denied @ unlink_internal - /usr/local/lib/node_modules/npm/node_modules/...

Try to adjust the user:

    $ sudo chown -R $(whoami) /usr/local/lib/node_modules/npm/node_modules
    $ sudo chown -R $(whoami) /usr/local/lib/node_modules/

