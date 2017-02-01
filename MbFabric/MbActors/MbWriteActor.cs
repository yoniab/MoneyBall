using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Runtime;
using Microsoft.ServiceFabric.Actors.Client;
using MbActors.Interfaces;

namespace MbActors
{
    [StatePersistence(StatePersistence.Persisted)]
    internal class MbWriteActor : Actor, IMbWriteActor
    {
        private const string KEY = "PlayState";
        private string _localState;

        public MbWriteActor(ActorService actorService, ActorId actorId)
            : base(actorService, actorId)
        {
        }

        public async Task WritePlayByPlayAsync(
            string data, 
            CancellationToken cancellationToken)
        {
            _localState += $"{data};";
            await this.StateManager.SetStateAsync(KEY, _localState, cancellationToken);
            await this.StateManager.SaveStateAsync(cancellationToken);
            ActorEventSource.Current.ActorMessage(this, $"Data = {_localState}");
            //var proxy = ActorProxy.Create<IMbReadActor>(Id);
            //await proxy.WriteAsync(_localState, cancellationToken);
        }

        protected async override Task OnActivateAsync()
        {
            ActorEventSource.Current.ActorMessage(this, "Actor activated.");
            //Task _ = Timer();
            this.RegisterTimer(TimerAsync, null,
                TimeSpan.FromSeconds(3),
                TimeSpan.FromSeconds(3));
            _localState = await this.StateManager.GetOrAddStateAsync(KEY, "Starting;");
        }

        private async Task TimerAsync(object _)
        {
            var proxy = ActorProxy.Create<IMbReadActor>(Id);
            await proxy.WriteAsync(_localState, CancellationToken.None);
        }

        //private async Task Timer()
        //{
        //    while (true)
        //    {
        //        await Task.Delay(3000);
        //        var proxy = ActorProxy.Create<IMbReadActor>(Id);
        //        await proxy.WriteAsync(_localState, cancellationToken);
        //    }
        //}

        protected async override Task OnDeactivateAsync()
        {
            var proxy = ActorProxy.Create<IMbReadActor>(Id);
            await proxy.WriteAsync(_localState, CancellationToken.None);
            await base.OnDeactivateAsync();
        }

    }
}
