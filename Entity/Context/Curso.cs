using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    [Table("Tbl_Curso")]
    public class Curso
    {
        public Curso()
        {
            //Alumno = new List<Alumno>();
        }
        [Key]
        public Guid CurIntId { get; set; }
        [Display (Name ="Cursos")]
        public string CursoName { get; set; }

        //public ICollection<Alumno> Alumno { get; set; }
    }
}
