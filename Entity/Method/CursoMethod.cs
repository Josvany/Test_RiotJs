using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class CursoMethod : CursoViewModel
    {
        public List<Curso> Listar()
        {
            using (var cn = new DatabaseContext())
            {
                return cn.Curso.ToList();
            }
        }
    }
}
