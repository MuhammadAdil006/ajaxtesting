using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TestingForAjax.Models;

namespace TestingForAjax.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Save(Student s)
        {
            if(s==null)
            {
                return Json(new { status = 0, message = "failed" });
            }
            Console.WriteLine(s);
            return Json(new { status = 1, message = "success" });
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}