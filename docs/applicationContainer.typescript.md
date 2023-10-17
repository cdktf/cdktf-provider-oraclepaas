# `oraclepaas_application_container`

Refer to the Terraform Registory for docs: [`oraclepaas_application_container`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container).

# `applicationContainer` Submodule <a name="`applicationContainer` Submodule" id="@cdktf/provider-oraclepaas.applicationContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationContainer <a name="ApplicationContainer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container oraclepaas_application_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainer(scope: Construct, id: string, config: ApplicationContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig">ApplicationContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig">ApplicationContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl">resetArchiveUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile">resetDeploymentFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword">resetGitPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername">resetGitUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets">resetLoadBalancerSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile">resetManifestFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType">resetSubscriptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDeployment` <a name="putDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment"></a>

```typescript
public putDeployment(value: ApplicationContainerDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `putManifest` <a name="putManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest"></a>

```typescript
public putManifest(value: ApplicationContainerManifest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationContainerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

---

##### `resetArchiveUrl` <a name="resetArchiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetArchiveUrl"></a>

```typescript
public resetArchiveUrl(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetDeploymentFile` <a name="resetDeploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetDeploymentFile"></a>

```typescript
public resetDeploymentFile(): void
```

##### `resetGitPassword` <a name="resetGitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitPassword"></a>

```typescript
public resetGitPassword(): void
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitRepository"></a>

```typescript
public resetGitRepository(): void
```

##### `resetGitUsername` <a name="resetGitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetGitUsername"></a>

```typescript
public resetGitUsername(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancerSubnets` <a name="resetLoadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetLoadBalancerSubnets"></a>

```typescript
public resetLoadBalancerSubnets(): void
```

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifest"></a>

```typescript
public resetManifest(): void
```

##### `resetManifestFile` <a name="resetManifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetManifestFile"></a>

```typescript
public resetManifestFile(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetNotificationEmail"></a>

```typescript
public resetNotificationEmail(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSubscriptionType` <a name="resetSubscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetSubscriptionType"></a>

```typescript
public resetSubscriptionType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

applicationContainer.ApplicationContainer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

applicationContainer.ApplicationContainer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

applicationContainer.ApplicationContainer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

applicationContainer.ApplicationContainer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl">appUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput">archiveUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput">deploymentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput">gitPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput">gitUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput">loadBalancerSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput">manifestFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput">manifestInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput">notificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput">subscriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl">archiveUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain">availabilityDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile">deploymentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword">gitPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository">gitRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername">gitUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets">loadBalancerSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile">manifestFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appUrl`<sup>Required</sup> <a name="appUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.appUrl"></a>

```typescript
public readonly appUrl: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deployment"></a>

```typescript
public readonly deployment: ApplicationContainerDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference">ApplicationContainerDeploymentOutputReference</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifest"></a>

```typescript
public readonly manifest: ApplicationContainerManifestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference">ApplicationContainerManifestOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationContainerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference">ApplicationContainerTimeoutsOutputReference</a>

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `archiveUrlInput`<sup>Optional</sup> <a name="archiveUrlInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrlInput"></a>

```typescript
public readonly archiveUrlInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string[];
```

- *Type:* string[]

---

##### `deploymentFileInput`<sup>Optional</sup> <a name="deploymentFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFileInput"></a>

```typescript
public readonly deploymentFileInput: string;
```

- *Type:* string

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: ApplicationContainerDeployment;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---

##### `gitPasswordInput`<sup>Optional</sup> <a name="gitPasswordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPasswordInput"></a>

```typescript
public readonly gitPasswordInput: string;
```

- *Type:* string

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepositoryInput"></a>

```typescript
public readonly gitRepositoryInput: string;
```

- *Type:* string

---

##### `gitUsernameInput`<sup>Optional</sup> <a name="gitUsernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsernameInput"></a>

```typescript
public readonly gitUsernameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerSubnetsInput`<sup>Optional</sup> <a name="loadBalancerSubnetsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnetsInput"></a>

```typescript
public readonly loadBalancerSubnetsInput: string[];
```

- *Type:* string[]

---

##### `manifestFileInput`<sup>Optional</sup> <a name="manifestFileInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFileInput"></a>

```typescript
public readonly manifestFileInput: string;
```

- *Type:* string

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestInput"></a>

```typescript
public readonly manifestInput: ApplicationContainerManifest;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmailInput"></a>

```typescript
public readonly notificationEmailInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `subscriptionTypeInput`<sup>Optional</sup> <a name="subscriptionTypeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionTypeInput"></a>

```typescript
public readonly subscriptionTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationContainerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> | cdktf.IResolvable

---

##### `archiveUrl`<sup>Required</sup> <a name="archiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.archiveUrl"></a>

```typescript
public readonly archiveUrl: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string[];
```

- *Type:* string[]

---

##### `deploymentFile`<sup>Required</sup> <a name="deploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.deploymentFile"></a>

```typescript
public readonly deploymentFile: string;
```

- *Type:* string

---

##### `gitPassword`<sup>Required</sup> <a name="gitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitPassword"></a>

```typescript
public readonly gitPassword: string;
```

- *Type:* string

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitRepository"></a>

```typescript
public readonly gitRepository: string;
```

- *Type:* string

---

##### `gitUsername`<sup>Required</sup> <a name="gitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.gitUsername"></a>

```typescript
public readonly gitUsername: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerSubnets`<sup>Required</sup> <a name="loadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.loadBalancerSubnets"></a>

```typescript
public readonly loadBalancerSubnets: string[];
```

- *Type:* string[]

---

##### `manifestFile`<sup>Required</sup> <a name="manifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.manifestFile"></a>

```typescript
public readonly manifestFile: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `subscriptionType`<sup>Required</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationContainerConfig <a name="ApplicationContainerConfig" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerConfig: applicationContainer.ApplicationContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl">archiveUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile">deploymentFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword">gitPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository">gitRepository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername">gitUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets">loadBalancerSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile">manifestFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType">subscriptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `archiveUrl`<sup>Optional</sup> <a name="archiveUrl" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.archiveUrl"></a>

```typescript
public readonly archiveUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#archive_url ApplicationContainer#archive_url}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#auth_type ApplicationContainer#auth_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#availability_domain ApplicationContainer#availability_domain}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deployment"></a>

```typescript
public readonly deployment: ApplicationContainerDeployment;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment ApplicationContainer#deployment}

---

##### `deploymentFile`<sup>Optional</sup> <a name="deploymentFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.deploymentFile"></a>

```typescript
public readonly deploymentFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#deployment_file ApplicationContainer#deployment_file}.

---

##### `gitPassword`<sup>Optional</sup> <a name="gitPassword" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitPassword"></a>

```typescript
public readonly gitPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_password ApplicationContainer#git_password}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitRepository"></a>

```typescript
public readonly gitRepository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_repository ApplicationContainer#git_repository}.

---

##### `gitUsername`<sup>Optional</sup> <a name="gitUsername" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.gitUsername"></a>

```typescript
public readonly gitUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#git_username ApplicationContainer#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#id ApplicationContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerSubnets`<sup>Optional</sup> <a name="loadBalancerSubnets" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.loadBalancerSubnets"></a>

```typescript
public readonly loadBalancerSubnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#load_balancer_subnets ApplicationContainer#load_balancer_subnets}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifest"></a>

```typescript
public readonly manifest: ApplicationContainerManifest;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest ApplicationContainer#manifest}

---

##### `manifestFile`<sup>Optional</sup> <a name="manifestFile" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.manifestFile"></a>

```typescript
public readonly manifestFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#manifest_file ApplicationContainer#manifest_file}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notification_email ApplicationContainer#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#region ApplicationContainer#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}.

---

##### `subscriptionType`<sup>Optional</sup> <a name="subscriptionType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.subscriptionType"></a>

```typescript
public readonly subscriptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#subscription_type ApplicationContainer#subscription_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#tags ApplicationContainer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationContainerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#timeouts ApplicationContainer#timeouts}

---

### ApplicationContainerDeployment <a name="ApplicationContainerDeployment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerDeployment: applicationContainer.ApplicationContainerDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances">instances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties">javaSystemProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment">secureEnvironment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services">services</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]</code> | services block. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#environment ApplicationContainer#environment}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#instances ApplicationContainer#instances}.

---

##### `javaSystemProperties`<sup>Optional</sup> <a name="javaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.javaSystemProperties"></a>

```typescript
public readonly javaSystemProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#java_system_properties ApplicationContainer#java_system_properties}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#memory ApplicationContainer#memory}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `secureEnvironment`<sup>Optional</sup> <a name="secureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.secureEnvironment"></a>

```typescript
public readonly secureEnvironment: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#secure_environment ApplicationContainer#secure_environment}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment.property.services"></a>

```typescript
public readonly services: IResolvable | ApplicationContainerDeploymentServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#services ApplicationContainer#services}

---

### ApplicationContainerDeploymentServices <a name="ApplicationContainerDeploymentServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerDeploymentServices: applicationContainer.ApplicationContainerDeploymentServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#identifier ApplicationContainer#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#name ApplicationContainer#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#password ApplicationContainer#password}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#username ApplicationContainer#username}.

---

### ApplicationContainerManifest <a name="ApplicationContainerManifest" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerManifest: applicationContainer.ApplicationContainerManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered">clustered</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command">command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint">healthCheckEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home">home</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release">release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | release block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime">shutdownTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime">startupTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}. |

---

##### `clustered`<sup>Optional</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.clustered"></a>

```typescript
public readonly clustered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#clustered ApplicationContainer#clustered}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#command ApplicationContainer#command}.

---

##### `healthCheckEndpoint`<sup>Optional</sup> <a name="healthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.healthCheckEndpoint"></a>

```typescript
public readonly healthCheckEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#health_check_endpoint ApplicationContainer#health_check_endpoint}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#home ApplicationContainer#home}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#mode ApplicationContainer#mode}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#notes ApplicationContainer#notes}.

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.release"></a>

```typescript
public readonly release: ApplicationContainerManifestRelease;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

release block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#release ApplicationContainer#release}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.runtime"></a>

```typescript
public readonly runtime: ApplicationContainerManifestRuntime;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#runtime ApplicationContainer#runtime}

---

##### `shutdownTime`<sup>Optional</sup> <a name="shutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.shutdownTime"></a>

```typescript
public readonly shutdownTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#shutdown_time ApplicationContainer#shutdown_time}.

---

##### `startupTime`<sup>Optional</sup> <a name="startupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.startupTime"></a>

```typescript
public readonly startupTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#startup_time ApplicationContainer#startup_time}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#type ApplicationContainer#type}.

---

### ApplicationContainerManifestRelease <a name="ApplicationContainerManifestRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerManifestRelease: applicationContainer.ApplicationContainerManifestRelease = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}. |

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#build ApplicationContainer#build}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#commit ApplicationContainer#commit}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#version ApplicationContainer#version}.

---

### ApplicationContainerManifestRuntime <a name="ApplicationContainerManifestRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerManifestRuntime: applicationContainer.ApplicationContainerManifestRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion">majorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}. |

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#major_version ApplicationContainer#major_version}.

---

### ApplicationContainerTimeouts <a name="ApplicationContainerTimeouts" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

const applicationContainerTimeouts: applicationContainer.ApplicationContainerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#create ApplicationContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/application_container#delete ApplicationContainer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationContainerDeploymentOutputReference <a name="ApplicationContainerDeploymentOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices">putServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties">resetJavaSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment">resetSecureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServices` <a name="putServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices"></a>

```typescript
public putServices(value: IResolvable | ApplicationContainerDeploymentServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.putServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetJavaSystemProperties` <a name="resetJavaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetJavaSystemProperties"></a>

```typescript
public resetJavaSystemProperties(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetSecureEnvironment` <a name="resetSecureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetSecureEnvironment"></a>

```typescript
public resetSecureEnvironment(): void
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.resetServices"></a>

```typescript
public resetServices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services">services</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput">instancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput">javaSystemPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput">secureEnvironmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput">servicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties">javaSystemProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment">secureEnvironment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.services"></a>

```typescript
public readonly services: ApplicationContainerDeploymentServicesList;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList">ApplicationContainerDeploymentServicesList</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: number;
```

- *Type:* number

---

##### `javaSystemPropertiesInput`<sup>Optional</sup> <a name="javaSystemPropertiesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemPropertiesInput"></a>

```typescript
public readonly javaSystemPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `secureEnvironmentInput`<sup>Optional</sup> <a name="secureEnvironmentInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironmentInput"></a>

```typescript
public readonly secureEnvironmentInput: string[];
```

- *Type:* string[]

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.servicesInput"></a>

```typescript
public readonly servicesInput: IResolvable | ApplicationContainerDeploymentServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `javaSystemProperties`<sup>Required</sup> <a name="javaSystemProperties" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.javaSystemProperties"></a>

```typescript
public readonly javaSystemProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `secureEnvironment`<sup>Required</sup> <a name="secureEnvironment" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.secureEnvironment"></a>

```typescript
public readonly secureEnvironment: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationContainerDeployment;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeployment">ApplicationContainerDeployment</a>

---


### ApplicationContainerDeploymentServicesList <a name="ApplicationContainerDeploymentServicesList" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerDeploymentServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get"></a>

```typescript
public get(index: number): ApplicationContainerDeploymentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationContainerDeploymentServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a>[]

---


### ApplicationContainerDeploymentServicesOutputReference <a name="ApplicationContainerDeploymentServicesOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerDeploymentServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationContainerDeploymentServices | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerDeploymentServices">ApplicationContainerDeploymentServices</a> | cdktf.IResolvable

---


### ApplicationContainerManifestOutputReference <a name="ApplicationContainerManifestOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerManifestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease">putRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered">resetClustered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint">resetHealthCheckEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease">resetRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime">resetShutdownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime">resetStartupTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelease` <a name="putRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease"></a>

```typescript
public putRelease(value: ApplicationContainerManifestRelease): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRelease.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `putRuntime` <a name="putRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime"></a>

```typescript
public putRuntime(value: ApplicationContainerManifestRuntime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `resetClustered` <a name="resetClustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetClustered"></a>

```typescript
public resetClustered(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetHealthCheckEndpoint` <a name="resetHealthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHealthCheckEndpoint"></a>

```typescript
public resetHealthCheckEndpoint(): void
```

##### `resetHome` <a name="resetHome" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetHome"></a>

```typescript
public resetHome(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetRelease` <a name="resetRelease" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRelease"></a>

```typescript
public resetRelease(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetShutdownTime` <a name="resetShutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetShutdownTime"></a>

```typescript
public resetShutdownTime(): void
```

##### `resetStartupTime` <a name="resetStartupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetStartupTime"></a>

```typescript
public resetStartupTime(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release">release</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput">clusteredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput">commandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput">healthCheckEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput">homeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput">releaseInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput">runtimeInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput">shutdownTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput">startupTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered">clustered</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint">healthCheckEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home">home</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime">shutdownTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime">startupTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.release"></a>

```typescript
public readonly release: ApplicationContainerManifestReleaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference">ApplicationContainerManifestReleaseOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtime"></a>

```typescript
public readonly runtime: ApplicationContainerManifestRuntimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference">ApplicationContainerManifestRuntimeOutputReference</a>

---

##### `clusteredInput`<sup>Optional</sup> <a name="clusteredInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clusteredInput"></a>

```typescript
public readonly clusteredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string;
```

- *Type:* string

---

##### `healthCheckEndpointInput`<sup>Optional</sup> <a name="healthCheckEndpointInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpointInput"></a>

```typescript
public readonly healthCheckEndpointInput: string;
```

- *Type:* string

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.homeInput"></a>

```typescript
public readonly homeInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.releaseInput"></a>

```typescript
public readonly releaseInput: ApplicationContainerManifestRelease;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: ApplicationContainerManifestRuntime;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---

##### `shutdownTimeInput`<sup>Optional</sup> <a name="shutdownTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTimeInput"></a>

```typescript
public readonly shutdownTimeInput: number;
```

- *Type:* number

---

##### `startupTimeInput`<sup>Optional</sup> <a name="startupTimeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTimeInput"></a>

```typescript
public readonly startupTimeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `clustered`<sup>Required</sup> <a name="clustered" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.clustered"></a>

```typescript
public readonly clustered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `healthCheckEndpoint`<sup>Required</sup> <a name="healthCheckEndpoint" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.healthCheckEndpoint"></a>

```typescript
public readonly healthCheckEndpoint: string;
```

- *Type:* string

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `shutdownTime`<sup>Required</sup> <a name="shutdownTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.shutdownTime"></a>

```typescript
public readonly shutdownTime: number;
```

- *Type:* number

---

##### `startupTime`<sup>Required</sup> <a name="startupTime" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.startupTime"></a>

```typescript
public readonly startupTime: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationContainerManifest;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifest">ApplicationContainerManifest</a>

---


### ApplicationContainerManifestReleaseOutputReference <a name="ApplicationContainerManifestReleaseOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerManifestReleaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute">resetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildAttribute` <a name="resetBuildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetBuildAttribute"></a>

```typescript
public resetBuildAttribute(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput">buildAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttributeInput"></a>

```typescript
public readonly buildAttributeInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestReleaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationContainerManifestRelease;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRelease">ApplicationContainerManifestRelease</a>

---


### ApplicationContainerManifestRuntimeOutputReference <a name="ApplicationContainerManifestRuntimeOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerManifestRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput">majorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion">majorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `majorVersionInput`<sup>Optional</sup> <a name="majorVersionInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersionInput"></a>

```typescript
public readonly majorVersionInput: string;
```

- *Type:* string

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationContainerManifestRuntime;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerManifestRuntime">ApplicationContainerManifestRuntime</a>

---


### ApplicationContainerTimeoutsOutputReference <a name="ApplicationContainerTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationContainer } from '@cdktf/provider-oraclepaas'

new applicationContainer.ApplicationContainerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationContainerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.applicationContainer.ApplicationContainerTimeouts">ApplicationContainerTimeouts</a> | cdktf.IResolvable

---



