using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    [Table("Tbl_Alumno")]
    public class Alumno
    {
        [Key]
        public Guid AlumIntId { get; set; }

        [Required(ErrorMessage = "Ingresar Nombre")]
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public bool Status { get; set; }

        public Guid CurIntId { get; set; }

        public virtual Curso Curso { get; set; }
    }
}
