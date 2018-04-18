using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Entity;

namespace Test_RiotJs.Controllers
{
    public class CursoController : Controller
    {
        CursoMethod objCurso = new CursoMethod();
        // GET: Curso
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Listar(BindingGrid curso)
        {
            return Json(objCurso.Listar(curso), JsonRequestBehavior.AllowGet);
        }
    }
}