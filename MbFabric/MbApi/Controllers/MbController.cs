using MbActors.Interfaces;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace MbApi.Controllers
{
    [ServiceRequestActionFilter]
    [RoutePrefix("api/mb")]
    public class MbController : ApiController
    {
        // GET api/mb/5/X
        [Route("write/{gameId}/{data}")]
        public async Task<string> Get(string gameId, string data)
        {
            var actorId = new ActorId(gameId);
            var proxy = ActorProxy.Create<IMbWriteActor>(actorId);
            await proxy.WritePlayByPlayAsync(data, CancellationToken.None);
            return "OK";
        }

        // GET api/mb/5/X
        [Route("read/{gameId}")]
        public async Task<string> Get(string gameId)
        {
            var actorId = new ActorId(gameId);
            var proxy = ActorProxy.Create<IMbReadActor>(actorId);
            string response = await proxy.ReadAsync(CancellationToken.None);
            return response;
        }

       
    }
}
