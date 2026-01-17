using System.Reflection;
using SPTarkov.DI.Annotations;
using SPTarkov.Server.Core.DI;
using SPTarkov.Server.Core.Models.Spt.Mod;
using WTTServerCommonLib.Models;
using Range = SemanticVersioning.Range;

namespace EukyreECOT;

public record ModMetadata : AbstractModMetadata
{
    public override string ModGuid { get; init; } = "com.eukyre.ecot";
    public override string Name { get; init; } = "Eukyre-Consortium";
    public override string Author { get; init; } = "GrooveypenguinX, ProbablyEukyre";
    public override List<string>? Contributors { get; init; } = null;
    public override SemanticVersioning.Version Version { get; init; } = new(typeof(ModMetadata).Assembly.GetName().Version?.ToString(3));
    public override Range SptVersion { get; init; } = new("~4.0.10");
    public override List<string>? Incompatibilities { get; init; }
    public override Dictionary<string, Range>? ModDependencies { get; init; } = new()
    {
        { "com.wtt.commonlib", new Range("~2.0.9") }
    };
    public override string? Url { get; init; }
    public override bool? IsBundleMod { get; init; } = true;
    public override string License { get; init; } = "CC-BY-NC-ND 4.0";
}


[Injectable(TypePriority = OnLoadOrder.PostDBModLoader + 2)]
public class EukyreECOT(
    WTTServerCommonLib.WTTServerCommonLib wttCommon) : IOnLoad
{
    public async Task OnLoad()
    {
        Assembly assembly = Assembly.GetExecutingAssembly();
        await wttCommon.CustomItemServiceExtended.CreateCustomItems(assembly);
        await wttCommon.CustomLocaleService.CreateCustomLocales(assembly);
        await wttCommon.CustomBotLoadoutService.CreateCustomBotLoadouts(assembly);
        await wttCommon.CustomAssortSchemeService.CreateCustomAssortSchemes(assembly);
        await wttCommon.CustomWeaponPresetService.CreateCustomWeaponPresets(assembly);
        await wttCommon.CustomAchievementService.CreateCustomAchievements(assembly);
        wttCommon.CustomSlotImageService.CreateSlotImages(assembly);

        await Task.CompletedTask;
    }
}
