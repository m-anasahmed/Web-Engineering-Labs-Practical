using LabWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace LabWebApi.Controllers
{
    public class StudentsController : Controller
    {
        private readonly LabDatabaseContext _context;

        public StudentsController(LabDatabaseContext context)
        {
            _context = context;
        }

        // Task 1: Display all students
        public IActionResult Index()
        {
            var students = _context.Students.ToList();
            return View(students);
        }

        // Task 2: Display students older than 18
        public IActionResult AdultStudents()
        {
            var students = _context.Students
                .Where(s => s.Age > 18)
                .ToList();
            return View("Index", students);
        }

        // Task 1: Show add student form
        public IActionResult Create()
        {
            return View();
        }

        // Task 1: Add new student
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Student student)
        {
            if (!ModelState.IsValid)
            {
                return View(student);
            }

            _context.Students.Add(student);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        // Edit student
        public IActionResult Edit(int id)
        {
            var student = _context.Students.Find(id);
            if (student == null)
                return NotFound();
            return View(student);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, Student student)
        {
            if (id != student.StudentId)
                return NotFound();

            if (!ModelState.IsValid)
                return View(student);

            _context.Students.Update(student);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        // Delete student
        public IActionResult Delete(int id)
        {
            var student = _context.Students.Find(id);
            if (student == null)
                return NotFound();
            return View(student);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var student = _context.Students.Find(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                _context.SaveChanges();
            }
            return RedirectToAction(nameof(Index));
        }
    }
}