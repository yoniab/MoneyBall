using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;

namespace MbActors.Interfaces
{
    public interface IMbReadActor : IActor
    {
        Task WriteAsync(
            string aggregateData,
            CancellationToken cancellationToken);
        Task<string> ReadAsync(
            CancellationToken cancellationToken);
    }
}
