﻿using Bunit;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Masa.Blazor.Test.App
{
    [TestClass]
    public class MAppTests : TestBase
    {
        [TestMethod]
        public void RenderWithChildContentt()
        {
            // Arrange & Act
            JSInterop.Mode = JSRuntimeMode.Loose;
            var cut = RenderComponent<MApp>(props =>
            {
                props.Add(app => app.ChildContent, "<span>Hello world</span>");
            });
            var contentDiv = cut.Find(".m-application--wrap");

            // Assert
            contentDiv.Children.MarkupMatches("<span>Hello world</span>");
        }

        [TestMethod]
        public void RenderAppWithLeftToRight()
        {
            //Act
            JSInterop.Mode = JSRuntimeMode.Loose;
            var cut = RenderComponent<MApp>(props =>
            {
                props.Add(app => app.LeftToRight, true);
            });
            var classes = cut.Instance.CssProvider.GetClass();
            var hasLeftToRightClass = classes.Contains("m-app");

            // Assert
            Assert.IsTrue(hasLeftToRightClass);
        }
    }

}
