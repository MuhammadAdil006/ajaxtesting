namespace TestingForAjax.Models
{
    public class Student
    {
        public int ID { get; set; }
        public String message { get; set; }
        public String email { get; set; }
        public IFormFile? image { get; set; }
    }
}
