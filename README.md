# Tech Playground

Goals:

* Markdown based pages for easy contribution
* Support for JavaScript, e.g. to filter data like spray caps.
* Maybe static page without web server (data for filtering can be generated from .md files and stored in JSON, for example)

Some options:

* [Jekyll](https://jekyllrb.com/) powerful static site generator, can be extended with Ruby plugins
* [mkdocs](http://www.mkdocs.org/) mainly .md →  .html, rather for plain documentation pages

## Jekyll

The example page can be built in a `ruby` docker image. Run it with

    bundle exec jekyll serve -H 0.0.0.0

after exposing port 4000.
