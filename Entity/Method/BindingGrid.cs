using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class BindingGrid
    {
        public string Columna { get; set; }
        public string Columna_Orden { get; set; }
        public int Limite { get; set; }
        public int Pagina { get; set; }

        public IList<BindingGRIDFiltro> Filtros { get; set; }
        public IList<BindingGRIDParametro> Parametros { get; set; }

        private BindingGRIDResponde BindingResponde = new BindingGRIDResponde();

        public void Inicializar()
        {
            /* Cantidad de registros por página */
            Pagina = Pagina - 1;

            /* Desde que número de fila va a Paginar */
            if (Pagina > 0) Pagina = Pagina * Limite;

            /* Filtros */
            if (Filtros == null)
                Filtros = new List<BindingGRIDFiltro>();

            /* Parametros adicionales */
            if (Parametros == null)
                Parametros = new List<BindingGRIDParametro>();
        }

        public void SetData(dynamic data, int total)
        {
            BindingResponde = new BindingGRIDResponde
            {
                data = data,
                total = total
            };
        }

        public BindingGRIDResponde Responde()
        {
            return BindingResponde;
        }
    }

    public class BindingGRIDResponde
    {
        public int total { get; set; }
        public dynamic data { get; set; }
    }

    public class BindingGRIDFiltro
    {
        public string columna { get; set; }
        public string valor { get; set; }
    }

    public class BindingGRIDParametro
    {
        public string clave { get; set; }
        public string valor { get; set; }
    }
}