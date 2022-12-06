(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"in-season-indicator\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"inSeason") || (depth0 != null ? lookupProperty(depth0,"inSeason") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"inSeason","hash":{},"data":data,"loc":{"start":{"line":13,"column":46},"end":{"line":13,"column":58}}}) : helper)))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\">\n    <div class=\"item-contents\">\n        <div class=\"item-image-container\">\n            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imageURL") || (depth0 != null ? lookupProperty(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":33}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":46}}}) : helper)))
    + ">\n        </div>\n        <div class=\"item-info-container\">\n            <h2 class=\"item-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":42}}}) : helper)))
    + "</h2>\n            <h3 class=\"ethicality-score\">Score: "
    + alias4(((helper = (helper = lookupProperty(helpers,"ethicalityScore") || (depth0 != null ? lookupProperty(depth0,"ethicalityScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ethicalityScore","hash":{},"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":67}}}) : helper)))
    + "</h3>\n            <p class=\"item-description\">\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"textDescription") || (depth0 != null ? lookupProperty(depth0,"textDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textDescription","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":35}}}) : helper)))
    + "\n            </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"produce") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "            <h3 class=\"alternatives\">Alternatives: "
    + alias4(((helper = (helper = lookupProperty(helpers,"alternatives") || (depth0 != null ? lookupProperty(depth0,"alternatives") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alternatives","hash":{},"data":data,"loc":{"start":{"line":15,"column":51},"end":{"line":15,"column":67}}}) : helper)))
    + "</h3>\n            <button class=\"save-item-button\">+ Save</button>\n        </div>\n        <div class=\"hidden\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":20}}}) : helper)))
    + "\n        </div>\n    </div>\n</div>";
},"useData":true});
})();