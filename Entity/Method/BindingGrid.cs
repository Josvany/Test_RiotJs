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

        public IList<BindingGridFiltro> Filtros { get; set; }
        public IList<BindingGridParametro> Parametros { get; set; }

        private BindingGridResponse Response = new BindingGridResponse();

        public void Inicializar()
        {
            /* Cantidad de registros por página */
            Pagina = Pagina - 1;

            /* Desde que número de fila va a paginar */
            if (Pagina > 0) Pagina = Pagina * Limite;

            /* Filtros */
            if (Filtros == null)
                Filtros = new List<BindingGridFiltro>();

            /* Parametros adicionales */
            if (Parametros == null)
                Parametros = new List<BindingGridParametro>();
        }

        public void SetData(dynamic data, int total)
        {
            Response = new BindingGridResponse
            {
                Data = data,
                Total = total
            };
        }

        public BindingGridResponse Responde()
        {
            return Response;
        }
    }

    public class BindingGridResponse
    {
        public int Total { get; set; }
        public dynamic Data { get; set; }
    }

    public class BindingGridFiltro
    {
        public string Columna { get; set; }
        public string Valor { get; set; }
    }

    public class BindingGridParametro
    {
        public string Clave { get; set; }
        public string Calor { get; set; }
    }
}