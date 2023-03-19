﻿namespace Masa.Try.Shared
{
    internal class ModuleManager
    {
        public List<Module> Modules { get; } = new List<Module>()
        {
            new()
            {
                ModuleName= "BaiduMap",
                RelatedScripts = new()
                {
                    new(ScriptNodeType.JS, "https://api.map.baidu.com/getscript?v=1.0&&type=webgl&ak=bgALNYvfp7HFsQKE1TX2RGuH0UN0ENC4")
                }
            },
            new()
            {
                ModuleName= "Echarts",
                RelatedScripts = new()
                {
                    new(ScriptNodeType.JS, "https://cdn.masastack.com/npm/echarts/5.1.1/echarts.min.js")
                }
            }
        };
    }

    internal class Module
    {
        public string ModuleName { get; set; }

        public List<ScriptNode> RelatedScripts { get; set; }

        public bool Loaded { get; set; }
    }

    public readonly struct ScriptNode
    {
        public ScriptNode(ScriptNodeType scriptNodeType, string content)
        {
            Id = Guid.NewGuid().ToString();
            NodeType = scriptNodeType;
            Content = content;
        }

        public string Id { get; init; }

        public ScriptNodeType NodeType { get; init; }

        public string Content { get; init; }
    }

    public enum ScriptNodeType
    {
        JS = 0,
        CSS = 1,
    }
}
