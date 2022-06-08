# Installation

1. [Install Prerequisites](https://jekyllrb.com/docs/installation/)

    I had to update Ruby as one of the dependent packages (`zeitwerk-2.4.2`) requested for Ruby version `>= 2.4.4`.

    Ended up with specifying per-project installation of ruby as follows: 
    `rbenv install 2.7.4; rbenv local 2.7.4` 

1. Install `jekyll` and `bundler`.

    `gem install jekyll bundler`

1. `bundle install`:  This command installs all the required packages.

1. `git clone git@github.com:pvis2022/pvis2022.git`, if you use an SSH key.

    Otherwise `git clone https://github.com/pvis2022/pvis2022.git`

1. `cd pvis2022` and `chmod a+x bin/*`

---

# Building and Running

The first option is for one who has running Web server:

- Building: (`bin/build`) continuously (re)generates the site under `_site`.  I ran local `nginx` web server, set `~/Sites` as my document root, and prepare a `pvis2022 --> _site` symbolic link.  Then, I can simply open `localhost/pvis2022` to check the generated result.

    You need a web server to view the generated HTML files.  If you simply attempt to open one of the HTML directly with your browser, you will see a horrible resuld due to missing links to `.css` and `.js` files.

This option is for one who does not run a local Web server:

- Building and Serving: (`bin/serve`) generates the site and launches a local Jekyll server.  This script opens the local site with your default Web browser.  The Jekyll server runs with `--incremental` mode, which allows detects updates on `*.md` file and reflects the changes to the Browser.
