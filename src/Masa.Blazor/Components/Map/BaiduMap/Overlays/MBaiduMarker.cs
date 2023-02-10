﻿using System.Drawing;
using System.Text.Json.Serialization;

namespace Masa.Blazor
{
    public class MBaiduMarker : MBaiduOverlay, IMarker
    {
        [Parameter]
        public GeoPoint Point { get; set; }

        [Parameter]
        public Size Offset { get; set; }

        [Parameter]
        public float Rotation { get; set; }

        [Parameter]
        public string Title { get; set; }

        [JsonIgnore]
        public override IJSObjectReference OverlayRef { get; set; }

        [JsonIgnore]
        [CascadingParameter(Name = "Parent")]
        public override MBaiduMap MapRef { get; set; }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await base.OnAfterRenderAsync(firstRender);

            if (firstRender && MapRef is not null)
                NextTick(async () => await MapRef.AddOverlayAsync(this));
        }
    }
}
