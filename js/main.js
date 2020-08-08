$("document").ready(function() {
  var libs = {};

  /* **************************************************************** */
  /* FRAMEWORKS LISTING ********************************************* */
  var frameworks = {
    "jQuery Compat (edge)": "http://code.jquery.com/jquery-git.js",
  };
  var frameworks_css = {
    "jQuery UI 1.10.3": "http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/css/base/jquery-ui.css",
  };
  var frameworks_extras = {
    "jQuery 2.1.0": {
      "Bootstrap 3.2.0": "http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"
    },
  };
  /* **************************************************************** */
  /* MENUS ********************************************************** */
  // Frameworks & Extensions Dropdown
  $("#dropdownMenu1 li a").click(function(event) {
    event.preventDefault();
    $(".extra").remove();
    var dropdown = $(this).parents('.btn-group');
    var selText = $(this).text();
    dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');

    var lib_extras = frameworks_extras[selText];

    for (var extra in lib_extras)
      dropdown.append("<div class='extra checkbox'><label><input type='checkbox'></input><span class='chk_lbl'>" + extra + "</span></label></div>");
  });

  // Script Injection Dropdown
  $("#dropdownMenu2 li a").click(function(event) {
    event.preventDefault();
    var dropdown = $(this).parents('.btn-group');
    var selText = $(this).text();
    dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
  });

  // Doctype Dropdown
  $("#dropdownMenu3 li a").click(function(event) {
    event.preventDefault();
    var dropdown = $(this).parents('.btn-group');
    var selText = $(this).text();
    dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
  });

  // HTML Dropdown
  $("#dropdownMenu4 li a").click(function(event) {
    event.preventDefault();
    var dropdown = $(this).parents('.btn-group');
    var selText = $(this).text();
    dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
  });

  // CSS Dropdown
  $("#dropdownMenu5 li a").click(function(event) {
    event.preventDefault();
    var dropdown = $(this).parents('.btn-group');
    var selText = $(this).text();
    dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
  });

  // Javascript Dropdown
  $("#dropdownMenu6 li a").click(function(event) {
    event.preventDefault();
    var dropdown = $(this).parents('.btn-group');
    var selText = $(this).text();
    dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
  });

  /* **************************************************************** */
  /* ACE BIDING ***************************************************** */
  ace.require("ace/ext/language_tools");

  var htmlEditor = ace.edit("html-editor");
  htmlEditor.setTheme("ace/theme/crimson-editor");
  htmlEditor.getSession().setMode("ace/mode/html");
  htmlEditor.setOptions({
    enableBasicAutocompletion: true,
    showPrintMargin: false
  });

  var cssEditor = ace.edit("css-editor");
  cssEditor.setTheme("ace/theme/crimson-editor");
  cssEditor.getSession().setMode("ace/mode/css");
  cssEditor.setOptions({
    enableBasicAutocompletion: true,
    showPrintMargin: false
  });

  var jsEditor = ace.edit("js-editor");
  jsEditor.setTheme("ace/theme/crimson-editor");
  jsEditor.getSession().setMode("ace/mode/javascript");
  jsEditor.setOptions({
    enableBasicAutocompletion: true,
    showPrintMargin: false
  });

  /* **************************************************************** */
  /* RUN ************************************************************ */
  $("#btnRun").click(function(event) {
    event.preventDefault();

    var previewDoc = window.frames[0].document;

    var css    = ace.edit("css-editor").getSession().getValue();
    var script = ace.edit("js-editor").getSession().getValue();
    var html   = ace.edit("html-editor").getSession().getValue();

    var dropdownMenu1Sel = $("#dropdownMenu1").parents('.btn-group').find('.dropdown-toggle').text().trim();
    var lib = frameworks[dropdownMenu1Sel];
    var extra_libs = [];
    $("#dropdownMenu1").parents('.btn-group').find('input:checked').parent().each(
      function() {
        extra_libs.push($(this).text().trim());
      }
    );
    var dropdownMenu2Sel = $("#dropdownMenu2").parents('.btn-group').find('.dropdown-toggle').text().trim();

    previewDoc.write("<!DOCTYPE html>");
    previewDoc.write("<html>");
    previewDoc.write("<head>");
    previewDoc.write("<style type='text/css'>" + css + "</style>");
    if (lib)
      previewDoc.write("<script src=" + lib + " type='text/javascript'></script>");
    for (var i in extra_libs) {
      if (extra_libs[i] in frameworks_css)
        previewDoc.write("<style type='text/css' src=" + frameworks_css[extra_libs[i]] + "></style>");

      if (lib in frameworks_extras)
        previewDoc.write("<script src=" + frameworks_extras[lib][extra_libs[i]] + " type='text/javascript'></script>");
    }
    if (dropdownMenu2Sel == "onLoad")
      previewDoc.write("<script type='text/javascript'>window.onload = function() {" + script + "}</script>");
    //else if (dropdownMenu2Sel == "onDomready")
    //    
    else if (dropdownMenu2Sel == "No wrap - in head")
      previewDoc.write("<script type='text/javascript'>" + script + "</script>");
    previewDoc.write("</head>");
    previewDoc.write("<body>");
    previewDoc.write(html);
    if (dropdownMenu2Sel == "No wrap - in body")
      previewDoc.write("<script type='text/javascript'>" + script + "</script>");
    previewDoc.write("</body>");
    previewDoc.write("</html>");
    previewDoc.close();
  });

  // Preview code on page load
  $("#btnRun").click();

  /* **************************************************************** */
  /* TIDYUP ********************************************************* */
  $("#btnTidyUp").click(function(event) {
    event.preventDefault();

    var html = ace.edit("html-editor").getSession().getValue();
    var html2 = style_html(html);
    ace.edit("html-editor").getSession().setValue(html2);

    var css = ace.edit("css-editor").getSession().getValue();
    var css2 = css_beautify(css);
    ace.edit("css-editor").getSession().setValue(css2);

    var js = ace.edit("js-editor").getSession().getValue();
    var js2 = js_beautify(js);
    ace.edit("js-editor").getSession().setValue(js2);
  });

  /* **************************************************************** */
  /* TOGETHER JS **************************************************** */
  $("#btnTogether").click(function(event) {
    event.preventDefault();
    TogetherJS(this);
    return false;
  });

});
