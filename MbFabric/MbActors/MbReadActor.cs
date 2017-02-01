using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Runtime;
using MbActors.Interfaces;
using System.Data.SqlClient;
using System.Configuration;
using System;

namespace MbActors
{
    [StatePersistence(StatePersistence.None)]
    internal class MbReadActor : Actor, IMbReadActor
    {
        private string _localMLState = "undefined";
        protected async override Task OnActivateAsync()
        {
            string conStr = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString();

            SqlConnection cnn = new SqlConnection(conStr);
            try
            {
                cnn.Open();
                cnn.Close();
            }
            catch (Exception ex)
            {
            }
            // TODO: Read WH
        }

        public MbReadActor(ActorService actorService, ActorId actorId)
            : base(actorService, actorId)
        {
        }

        public Task<string> ReadAsync(CancellationToken cancellationToken)
        {
            return Task.FromResult(_localMLState);
        }

        public Task WriteAsync(
            string aggregateData, 
            CancellationToken cancellationToken)
        {
            // TODO: ML call (WH data, _localState)
            _localMLState = aggregateData;

            ActorEventSource.Current.ActorMessage(this, $"Data = {_localMLState}");
            return Task.FromResult<object>(null);
        }


    }
}
