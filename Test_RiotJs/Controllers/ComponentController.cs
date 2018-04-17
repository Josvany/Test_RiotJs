using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Test_RiotJs.Views.Component
{
    public class ComponentController : Controller
    {
        // GET: Component
        public ActionResult Index(string url)
        {
            return View(string.Format("~/Views/Component/{0}.cshtml", url));
        }
    }
}