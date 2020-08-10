# Forkable-UI

**Forkable-UI** is an open source kick-starter for forkable cloud services, such as [JSFiddle](http://jsfiddle.net/) or PasteBin, etc. It provides a demo, easy to hack minimalist shell. **Forkable-UI** is *document-agnostic* with classic functions, a writing pad and a rendering area. Functions of `Run/Render`, `Save`, `Fork`, `TidyUp`, `Collaborate`, `Embed/Share`, `Print` apply to "the document", with relevant API calls to a `Mongodb` database. You can clone, edit the document's shape, editors, and rendeing function to open a new forkable cloud service with your own processing logic.

You focus your efforts on defining your document's shape (aka `schema`), editor's UI, its dynamics and rendering logic.

No account necessary.
We would welcome a modular account management, so an user could keep his creations and liked documents under hand. See section "Contributing".

## Stack
- HTML/CSS: Bulma.css
- JS: native javascript
- API: python-eve. Verbs : GET, POST.
- Database: Mongodb

## Schema


## Provided
* Topbar
** Run/render
** Save to cloud : 
*** `POST` to mongodb
*** create new url which serves the results
*** "move" to that `url/n+1/`
** Fork
** TidyUp
** Collaborate
** Embed (optional)
** Print`(optional)
* Main
** Sider left
** Sider right
* Footer

## Not provided
* User login/logout, auth, settings (optional)

## Features

* HTML/CSS/JS Editors
* Preview
* Syntax checks
* Tidy Up
* Script wrapping
* Isolated iFrame sandbox

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

#### Contributers
{name} ([@pseudo](http://twitter.com/pseudo))

#### Resources used
* Ace ([link](http://ace.c9.io))
* JSBeautifier ([link](http://jsbeautifier.org))
* Bootstrap 3.3.2 ([link](http://getbootstrap.com))
* JQuery 2.1.3 ([link](http://blog.jquery.com/2014/12/18/jquery-1-11-2-and-2-1-3-released-safari-fail-safe-edition/))

#### Inspiration
* JSFiddle ([link](http://jsfiddle.net))
* JStinker ([link](http://johncipponeri.github.io/jstinker/#))

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
