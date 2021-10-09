﻿using BlazorComponent;
using Microsoft.AspNetCore.Components;

namespace MASA.Blazor
{
    public partial class MCardText : BCardText
    {
        [CascadingParameter]
        public MCard Card { get; set; }

        protected override void SetComponentClass()
        {
            base.SetComponentClass();

            CssProvider
                .Apply(cssBuilder =>
                {
                    cssBuilder
                        .Add("m-card__text")
                        .AddTheme(Card.IsDark);
                });
        }
    }
}