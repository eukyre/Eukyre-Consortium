using System.Reflection;
using SPTarkov.DI.Annotations;
using SPTarkov.Server.Core.DI;
using SPTarkov.Server.Core.Models.Spt.Mod;
using WTTServerCommonLib.Models;
using Range = SemanticVersioning.Range;

namespace EukyreECOT;

public record ModMetadata : IModMetadata
{
    public string ModGuid { get; init; } = "com.eukyre.ecot";
    public string Name { get; init; } = "Eukyre-Consortium";
    public string Author { get; init; } = "GrooveypenguinX, ProbablyEukyre";
    public List<string>? Contributors { get; init; } = null;
    public SemanticVersioning.Version Version { get; init; } = new(typeof(ModMetadata).Assembly.GetName().Version?.ToString(3));
    public Range SptVersion { get; init; } = new("~4.1.6");
    public bool HasPrepatcher { get; init; }
    public List<string>? Incompatibilities { get; init; }
    public Dictionary<string, Range>? ModDependencies { get; init; } = new()
    {
        { "com.wtt.commonlib", new Range("~3.0.6") },
        { "com.epicrangetime.aio", new Range("~5.0.1") }
    };
    public string? Url { get; init; }
    public bool? IsBundleMod { get; init; } = true;
    public string License { get; init; } = "CC-BY-NC-ND 4.0";
}


[Injectable(TypePriority = OnLoadOrder.Preload + 2)]
public class EukyreECOT(
    WTTServerCommonLib.WTTServerCommonLib wttCommon) : IOnLoad
{
    public async Task OnLoadAsync(CancellationToken token)
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
