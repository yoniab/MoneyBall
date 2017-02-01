using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;

namespace MbActors.Interfaces
{
    public interface IMbWriteActor : IActor
    {
        Task WritePlayByPlayAsync(
            string data,
            CancellationToken cancellationToken);
    }
}
