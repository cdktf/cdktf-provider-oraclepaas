# `mysqlServiceInstance` Submodule <a name="`mysqlServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.mysqlServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlServiceInstance <a name="MysqlServiceInstance" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance oraclepaas_mysql_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

new mysqlServiceInstance.MysqlServiceInstance(scope: Construct, id: string, config: MysqlServiceInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig">MysqlServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig">MysqlServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups">putBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration">putMysqlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackupDestination">resetBackupDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackups">resetBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetMeteringFrequency">resetMeteringFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetVmUser">resetVmUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackups` <a name="putBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups"></a>

```typescript
public putBackups(value: MysqlServiceInstanceBackups): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putBackups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---

##### `putMysqlConfiguration` <a name="putMysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration"></a>

```typescript
public putMysqlConfiguration(value: MysqlServiceInstanceMysqlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putMysqlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: MysqlServiceInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetBackupDestination` <a name="resetBackupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackupDestination"></a>

```typescript
public resetBackupDestination(): void
```

##### `resetBackups` <a name="resetBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetBackups"></a>

```typescript
public resetBackups(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetIpNetwork"></a>

```typescript
public resetIpNetwork(): void
```

##### `resetMeteringFrequency` <a name="resetMeteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetMeteringFrequency"></a>

```typescript
public resetMeteringFrequency(): void
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetNotificationEmail"></a>

```typescript
public resetNotificationEmail(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmUser` <a name="resetVmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.resetVmUser"></a>

```typescript
public resetVmUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

mysqlServiceInstance.MysqlServiceInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

mysqlServiceInstance.MysqlServiceInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

mysqlServiceInstance.MysqlServiceInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MysqlServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference">MysqlServiceInstanceBackupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.baseReleaseVersion">baseReleaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.emUrl">emUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfiguration">mysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.releaseVersion">releaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.serviceVersion">serviceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference">MysqlServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestinationInput">backupDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupsInput">backupsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetworkInput">ipNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequencyInput">meteringFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfigurationInput">mysqlConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmailInput">notificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUserInput">vmUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestination">backupDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequency">meteringFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUser">vmUser</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backups`<sup>Required</sup> <a name="backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backups"></a>

```typescript
public readonly backups: MysqlServiceInstanceBackupsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference">MysqlServiceInstanceBackupsOutputReference</a>

---

##### `baseReleaseVersion`<sup>Required</sup> <a name="baseReleaseVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.baseReleaseVersion"></a>

```typescript
public readonly baseReleaseVersion: string;
```

- *Type:* string

---

##### `emUrl`<sup>Required</sup> <a name="emUrl" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.emUrl"></a>

```typescript
public readonly emUrl: string;
```

- *Type:* string

---

##### `mysqlConfiguration`<sup>Required</sup> <a name="mysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfiguration"></a>

```typescript
public readonly mysqlConfiguration: MysqlServiceInstanceMysqlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationOutputReference</a>

---

##### `releaseVersion`<sup>Required</sup> <a name="releaseVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.releaseVersion"></a>

```typescript
public readonly releaseVersion: string;
```

- *Type:* string

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.serviceVersion"></a>

```typescript
public readonly serviceVersion: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlServiceInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference">MysqlServiceInstanceTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `backupDestinationInput`<sup>Optional</sup> <a name="backupDestinationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestinationInput"></a>

```typescript
public readonly backupDestinationInput: string;
```

- *Type:* string

---

##### `backupsInput`<sup>Optional</sup> <a name="backupsInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupsInput"></a>

```typescript
public readonly backupsInput: MysqlServiceInstanceBackups;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetworkInput"></a>

```typescript
public readonly ipNetworkInput: string;
```

- *Type:* string

---

##### `meteringFrequencyInput`<sup>Optional</sup> <a name="meteringFrequencyInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequencyInput"></a>

```typescript
public readonly meteringFrequencyInput: string;
```

- *Type:* string

---

##### `mysqlConfigurationInput`<sup>Optional</sup> <a name="mysqlConfigurationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.mysqlConfigurationInput"></a>

```typescript
public readonly mysqlConfigurationInput: MysqlServiceInstanceMysqlConfiguration;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmailInput"></a>

```typescript
public readonly notificationEmailInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKeyInput"></a>

```typescript
public readonly sshPublicKeyInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MysqlServiceInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

---

##### `vmUserInput`<sup>Optional</sup> <a name="vmUserInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUserInput"></a>

```typescript
public readonly vmUserInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupDestination`<sup>Required</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.backupDestination"></a>

```typescript
public readonly backupDestination: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

---

##### `meteringFrequency`<sup>Required</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.meteringFrequency"></a>

```typescript
public readonly meteringFrequency: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vmUser`<sup>Required</sup> <a name="vmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.vmUser"></a>

```typescript
public readonly vmUser: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlServiceInstanceBackups <a name="MysqlServiceInstanceBackups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

const mysqlServiceInstanceBackups: mysqlServiceInstance.MysqlServiceInstanceBackups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.createIfMissing">createIfMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}. |

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageContainer"></a>

```typescript
public readonly cloudStorageContainer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_container MysqlServiceInstance#cloud_storage_container}.

---

##### `cloudStoragePassword`<sup>Optional</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStoragePassword"></a>

```typescript
public readonly cloudStoragePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_password MysqlServiceInstance#cloud_storage_password}.

---

##### `cloudStorageUsername`<sup>Optional</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.cloudStorageUsername"></a>

```typescript
public readonly cloudStorageUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#cloud_storage_username MysqlServiceInstance#cloud_storage_username}.

---

##### `createIfMissing`<sup>Optional</sup> <a name="createIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups.property.createIfMissing"></a>

```typescript
public readonly createIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create_if_missing MysqlServiceInstance#create_if_missing}.

---

### MysqlServiceInstanceConfig <a name="MysqlServiceInstanceConfig" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

const mysqlServiceInstanceConfig: mysqlServiceInstance.MysqlServiceInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.mysqlConfiguration">mysqlConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | mysql_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#name MysqlServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#shape MysqlServiceInstance#shape}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backupDestination">backupDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backups">backups</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | backups block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#description MysqlServiceInstance#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#id MysqlServiceInstance#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.meteringFrequency">meteringFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#region MysqlServiceInstance#region}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.subnet">subnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#subnet MysqlServiceInstance#subnet}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.vmUser">vmUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mysqlConfiguration`<sup>Required</sup> <a name="mysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.mysqlConfiguration"></a>

```typescript
public readonly mysqlConfiguration: MysqlServiceInstanceMysqlConfiguration;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

mysql_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_configuration MysqlServiceInstance#mysql_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#name MysqlServiceInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#shape MysqlServiceInstance#shape}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ssh_public_key MysqlServiceInstance#ssh_public_key}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#availability_domain MysqlServiceInstance#availability_domain}.

---

##### `backupDestination`<sup>Optional</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backupDestination"></a>

```typescript
public readonly backupDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backup_destination MysqlServiceInstance#backup_destination}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.backups"></a>

```typescript
public readonly backups: MysqlServiceInstanceBackups;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

backups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#backups MysqlServiceInstance#backups}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#description MysqlServiceInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#id MysqlServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#ip_network MysqlServiceInstance#ip_network}.

---

##### `meteringFrequency`<sup>Optional</sup> <a name="meteringFrequency" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.meteringFrequency"></a>

```typescript
public readonly meteringFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#metering_frequency MysqlServiceInstance#metering_frequency}.

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#notification_email MysqlServiceInstance#notification_email}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#region MysqlServiceInstance#region}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#subnet MysqlServiceInstance#subnet}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlServiceInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#timeouts MysqlServiceInstance#timeouts}

---

##### `vmUser`<sup>Optional</sup> <a name="vmUser" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceConfig.property.vmUser"></a>

```typescript
public readonly vmUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#vm_user MysqlServiceInstance#vm_user}.

---

### MysqlServiceInstanceMysqlConfiguration <a name="MysqlServiceInstanceMysqlConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

const mysqlServiceInstanceMysqlConfiguration: mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_name MysqlServiceInstance#db_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbStorage">dbStorage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.enterpriseMonitorConfiguration">enterpriseMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | enterprise_monitor_configuration block. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCharset">mysqlCharset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCollation">mysqlCollation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPassword">mysqlPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPort">mysqlPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlUsername">mysqlUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.snapshotName">snapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.sourceServiceName">sourceServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}. |

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_name MysqlServiceInstance#db_name}.

---

##### `dbStorage`<sup>Optional</sup> <a name="dbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.dbStorage"></a>

```typescript
public readonly dbStorage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#db_storage MysqlServiceInstance#db_storage}.

---

##### `enterpriseMonitorConfiguration`<sup>Optional</sup> <a name="enterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.enterpriseMonitorConfiguration"></a>

```typescript
public readonly enterpriseMonitorConfiguration: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

enterprise_monitor_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#enterprise_monitor_configuration MysqlServiceInstance#enterprise_monitor_configuration}

---

##### `mysqlCharset`<sup>Optional</sup> <a name="mysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCharset"></a>

```typescript
public readonly mysqlCharset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_charset MysqlServiceInstance#mysql_charset}.

---

##### `mysqlCollation`<sup>Optional</sup> <a name="mysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlCollation"></a>

```typescript
public readonly mysqlCollation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_collation MysqlServiceInstance#mysql_collation}.

---

##### `mysqlPassword`<sup>Optional</sup> <a name="mysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPassword"></a>

```typescript
public readonly mysqlPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_password MysqlServiceInstance#mysql_password}.

---

##### `mysqlPort`<sup>Optional</sup> <a name="mysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlPort"></a>

```typescript
public readonly mysqlPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_port MysqlServiceInstance#mysql_port}.

---

##### `mysqlUsername`<sup>Optional</sup> <a name="mysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.mysqlUsername"></a>

```typescript
public readonly mysqlUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#mysql_username MysqlServiceInstance#mysql_username}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#snapshot_name MysqlServiceInstance#snapshot_name}.

---

##### `sourceServiceName`<sup>Optional</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration.property.sourceServiceName"></a>

```typescript
public readonly sourceServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#source_service_name MysqlServiceInstance#source_service_name}.

---

### MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration <a name="MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

const mysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration: mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentPassword">emAgentPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentUsername">emAgentUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPassword">emPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_password MysqlServiceInstance#em_password}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPort">emPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_port MysqlServiceInstance#em_port}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emUsername">emUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_username MysqlServiceInstance#em_username}. |

---

##### `emAgentPassword`<sup>Optional</sup> <a name="emAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentPassword"></a>

```typescript
public readonly emAgentPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_password MysqlServiceInstance#em_agent_password}.

---

##### `emAgentUsername`<sup>Optional</sup> <a name="emAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emAgentUsername"></a>

```typescript
public readonly emAgentUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_agent_username MysqlServiceInstance#em_agent_username}.

---

##### `emPassword`<sup>Optional</sup> <a name="emPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPassword"></a>

```typescript
public readonly emPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_password MysqlServiceInstance#em_password}.

---

##### `emPort`<sup>Optional</sup> <a name="emPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emPort"></a>

```typescript
public readonly emPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_port MysqlServiceInstance#em_port}.

---

##### `emUsername`<sup>Optional</sup> <a name="emUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration.property.emUsername"></a>

```typescript
public readonly emUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#em_username MysqlServiceInstance#em_username}.

---

### MysqlServiceInstanceTimeouts <a name="MysqlServiceInstanceTimeouts" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

const mysqlServiceInstanceTimeouts: mysqlServiceInstance.MysqlServiceInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create MysqlServiceInstance#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#delete MysqlServiceInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#create MysqlServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/mysql_service_instance#delete MysqlServiceInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlServiceInstanceBackupsOutputReference <a name="MysqlServiceInstanceBackupsOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

new mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStoragePassword">resetCloudStoragePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStorageUsername">resetCloudStorageUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCreateIfMissing">resetCreateIfMissing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudStoragePassword` <a name="resetCloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStoragePassword"></a>

```typescript
public resetCloudStoragePassword(): void
```

##### `resetCloudStorageUsername` <a name="resetCloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCloudStorageUsername"></a>

```typescript
public resetCloudStorageUsername(): void
```

##### `resetCreateIfMissing` <a name="resetCreateIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.resetCreateIfMissing"></a>

```typescript
public resetCreateIfMissing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput">cloudStorageContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput">cloudStoragePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput">cloudStorageUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissingInput">createIfMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePassword">cloudStoragePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsername">cloudStorageUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissing">createIfMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudStorageContainerInput`<sup>Optional</sup> <a name="cloudStorageContainerInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainerInput"></a>

```typescript
public readonly cloudStorageContainerInput: string;
```

- *Type:* string

---

##### `cloudStoragePasswordInput`<sup>Optional</sup> <a name="cloudStoragePasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePasswordInput"></a>

```typescript
public readonly cloudStoragePasswordInput: string;
```

- *Type:* string

---

##### `cloudStorageUsernameInput`<sup>Optional</sup> <a name="cloudStorageUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsernameInput"></a>

```typescript
public readonly cloudStorageUsernameInput: string;
```

- *Type:* string

---

##### `createIfMissingInput`<sup>Optional</sup> <a name="createIfMissingInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissingInput"></a>

```typescript
public readonly createIfMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageContainer"></a>

```typescript
public readonly cloudStorageContainer: string;
```

- *Type:* string

---

##### `cloudStoragePassword`<sup>Required</sup> <a name="cloudStoragePassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStoragePassword"></a>

```typescript
public readonly cloudStoragePassword: string;
```

- *Type:* string

---

##### `cloudStorageUsername`<sup>Required</sup> <a name="cloudStorageUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.cloudStorageUsername"></a>

```typescript
public readonly cloudStorageUsername: string;
```

- *Type:* string

---

##### `createIfMissing`<sup>Required</sup> <a name="createIfMissing" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.createIfMissing"></a>

```typescript
public readonly createIfMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlServiceInstanceBackups;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceBackups">MysqlServiceInstanceBackups</a>

---


### MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference <a name="MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

new mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentPassword">resetEmAgentPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentUsername">resetEmAgentUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPassword">resetEmPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPort">resetEmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmUsername">resetEmUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmAgentPassword` <a name="resetEmAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentPassword"></a>

```typescript
public resetEmAgentPassword(): void
```

##### `resetEmAgentUsername` <a name="resetEmAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmAgentUsername"></a>

```typescript
public resetEmAgentUsername(): void
```

##### `resetEmPassword` <a name="resetEmPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPassword"></a>

```typescript
public resetEmPassword(): void
```

##### `resetEmPort` <a name="resetEmPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmPort"></a>

```typescript
public resetEmPort(): void
```

##### `resetEmUsername` <a name="resetEmUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.resetEmUsername"></a>

```typescript
public resetEmUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPasswordInput">emAgentPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsernameInput">emAgentUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPasswordInput">emPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPortInput">emPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsernameInput">emUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPassword">emAgentPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsername">emAgentUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPassword">emPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPort">emPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsername">emUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emAgentPasswordInput`<sup>Optional</sup> <a name="emAgentPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPasswordInput"></a>

```typescript
public readonly emAgentPasswordInput: string;
```

- *Type:* string

---

##### `emAgentUsernameInput`<sup>Optional</sup> <a name="emAgentUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsernameInput"></a>

```typescript
public readonly emAgentUsernameInput: string;
```

- *Type:* string

---

##### `emPasswordInput`<sup>Optional</sup> <a name="emPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPasswordInput"></a>

```typescript
public readonly emPasswordInput: string;
```

- *Type:* string

---

##### `emPortInput`<sup>Optional</sup> <a name="emPortInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPortInput"></a>

```typescript
public readonly emPortInput: number;
```

- *Type:* number

---

##### `emUsernameInput`<sup>Optional</sup> <a name="emUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsernameInput"></a>

```typescript
public readonly emUsernameInput: string;
```

- *Type:* string

---

##### `emAgentPassword`<sup>Required</sup> <a name="emAgentPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentPassword"></a>

```typescript
public readonly emAgentPassword: string;
```

- *Type:* string

---

##### `emAgentUsername`<sup>Required</sup> <a name="emAgentUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emAgentUsername"></a>

```typescript
public readonly emAgentUsername: string;
```

- *Type:* string

---

##### `emPassword`<sup>Required</sup> <a name="emPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPassword"></a>

```typescript
public readonly emPassword: string;
```

- *Type:* string

---

##### `emPort`<sup>Required</sup> <a name="emPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emPort"></a>

```typescript
public readonly emPort: number;
```

- *Type:* number

---

##### `emUsername`<sup>Required</sup> <a name="emUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.emUsername"></a>

```typescript
public readonly emUsername: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---


### MysqlServiceInstanceMysqlConfigurationOutputReference <a name="MysqlServiceInstanceMysqlConfigurationOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

new mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration">putEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbStorage">resetDbStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetEnterpriseMonitorConfiguration">resetEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCharset">resetMysqlCharset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCollation">resetMysqlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPassword">resetMysqlPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPort">resetMysqlPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlUsername">resetMysqlUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSourceServiceName">resetSourceServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnterpriseMonitorConfiguration` <a name="putEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration"></a>

```typescript
public putEnterpriseMonitorConfiguration(value: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.putEnterpriseMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---

##### `resetDbName` <a name="resetDbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDbStorage` <a name="resetDbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetDbStorage"></a>

```typescript
public resetDbStorage(): void
```

##### `resetEnterpriseMonitorConfiguration` <a name="resetEnterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetEnterpriseMonitorConfiguration"></a>

```typescript
public resetEnterpriseMonitorConfiguration(): void
```

##### `resetMysqlCharset` <a name="resetMysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCharset"></a>

```typescript
public resetMysqlCharset(): void
```

##### `resetMysqlCollation` <a name="resetMysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlCollation"></a>

```typescript
public resetMysqlCollation(): void
```

##### `resetMysqlPassword` <a name="resetMysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPassword"></a>

```typescript
public resetMysqlPassword(): void
```

##### `resetMysqlPort` <a name="resetMysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlPort"></a>

```typescript
public resetMysqlPort(): void
```

##### `resetMysqlUsername` <a name="resetMysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetMysqlUsername"></a>

```typescript
public resetMysqlUsername(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```

##### `resetSourceServiceName` <a name="resetSourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.resetSourceServiceName"></a>

```typescript
public resetSourceServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.connectString">connectString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfiguration">enterpriseMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorageInput">dbStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfigurationInput">enterpriseMonitorConfigurationInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharsetInput">mysqlCharsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollationInput">mysqlCollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPasswordInput">mysqlPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPortInput">mysqlPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsernameInput">mysqlUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceNameInput">sourceServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorage">dbStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharset">mysqlCharset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollation">mysqlCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPassword">mysqlPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPort">mysqlPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsername">mysqlUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceName">sourceServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectString`<sup>Required</sup> <a name="connectString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.connectString"></a>

```typescript
public readonly connectString: string;
```

- *Type:* string

---

##### `enterpriseMonitorConfiguration`<sup>Required</sup> <a name="enterpriseMonitorConfiguration" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfiguration"></a>

```typescript
public readonly enterpriseMonitorConfiguration: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfigurationOutputReference</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbStorageInput`<sup>Optional</sup> <a name="dbStorageInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorageInput"></a>

```typescript
public readonly dbStorageInput: number;
```

- *Type:* number

---

##### `enterpriseMonitorConfigurationInput`<sup>Optional</sup> <a name="enterpriseMonitorConfigurationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.enterpriseMonitorConfigurationInput"></a>

```typescript
public readonly enterpriseMonitorConfigurationInput: MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration">MysqlServiceInstanceMysqlConfigurationEnterpriseMonitorConfiguration</a>

---

##### `mysqlCharsetInput`<sup>Optional</sup> <a name="mysqlCharsetInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharsetInput"></a>

```typescript
public readonly mysqlCharsetInput: string;
```

- *Type:* string

---

##### `mysqlCollationInput`<sup>Optional</sup> <a name="mysqlCollationInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollationInput"></a>

```typescript
public readonly mysqlCollationInput: string;
```

- *Type:* string

---

##### `mysqlPasswordInput`<sup>Optional</sup> <a name="mysqlPasswordInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPasswordInput"></a>

```typescript
public readonly mysqlPasswordInput: string;
```

- *Type:* string

---

##### `mysqlPortInput`<sup>Optional</sup> <a name="mysqlPortInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPortInput"></a>

```typescript
public readonly mysqlPortInput: number;
```

- *Type:* number

---

##### `mysqlUsernameInput`<sup>Optional</sup> <a name="mysqlUsernameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsernameInput"></a>

```typescript
public readonly mysqlUsernameInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `sourceServiceNameInput`<sup>Optional</sup> <a name="sourceServiceNameInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceNameInput"></a>

```typescript
public readonly sourceServiceNameInput: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbStorage`<sup>Required</sup> <a name="dbStorage" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.dbStorage"></a>

```typescript
public readonly dbStorage: number;
```

- *Type:* number

---

##### `mysqlCharset`<sup>Required</sup> <a name="mysqlCharset" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCharset"></a>

```typescript
public readonly mysqlCharset: string;
```

- *Type:* string

---

##### `mysqlCollation`<sup>Required</sup> <a name="mysqlCollation" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlCollation"></a>

```typescript
public readonly mysqlCollation: string;
```

- *Type:* string

---

##### `mysqlPassword`<sup>Required</sup> <a name="mysqlPassword" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPassword"></a>

```typescript
public readonly mysqlPassword: string;
```

- *Type:* string

---

##### `mysqlPort`<sup>Required</sup> <a name="mysqlPort" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlPort"></a>

```typescript
public readonly mysqlPort: number;
```

- *Type:* number

---

##### `mysqlUsername`<sup>Required</sup> <a name="mysqlUsername" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.mysqlUsername"></a>

```typescript
public readonly mysqlUsername: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `sourceServiceName`<sup>Required</sup> <a name="sourceServiceName" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.sourceServiceName"></a>

```typescript
public readonly sourceServiceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlServiceInstanceMysqlConfiguration;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceMysqlConfiguration">MysqlServiceInstanceMysqlConfiguration</a>

---


### MysqlServiceInstanceTimeoutsOutputReference <a name="MysqlServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { mysqlServiceInstance } from '@cdktf/provider-oraclepaas'

new mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlServiceInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.mysqlServiceInstance.MysqlServiceInstanceTimeouts">MysqlServiceInstanceTimeouts</a>

---



