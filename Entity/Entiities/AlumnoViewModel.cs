using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class AlumnoViewModel
    {
        public Guid AlumIntId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public bool Status { get; set; }
        public Guid CurIntId { get; set; }
        public virtual Curso Curso { get; set; }
    }
}
