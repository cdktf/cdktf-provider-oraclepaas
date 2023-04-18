# `provider`

Refer to the Terraform Registory for docs: [`oraclepaas`](https://www.terraform.io/docs/providers/oraclepaas).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-oraclepaas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OraclepaasProvider <a name="OraclepaasProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas oraclepaas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-oraclepaas'

new provider.OraclepaasProvider(scope: Construct, id: string, config: OraclepaasProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig">OraclepaasProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig">OraclepaasProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint">resetApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint">resetDatabaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint">resetJavaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint">resetMysqlEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApplicationEndpoint` <a name="resetApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint"></a>

```typescript
public resetApplicationEndpoint(): void
```

##### `resetDatabaseEndpoint` <a name="resetDatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint"></a>

```typescript
public resetDatabaseEndpoint(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetJavaEndpoint` <a name="resetJavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint"></a>

```typescript
public resetJavaEndpoint(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMysqlEndpoint` <a name="resetMysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint"></a>

```typescript
public resetMysqlEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-oraclepaas'

provider.OraclepaasProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-oraclepaas'

provider.OraclepaasProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-oraclepaas'

provider.OraclepaasProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput">applicationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput">databaseEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput">identityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput">javaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput">mysqlEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint">applicationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint">databaseEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain">identityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint">javaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint">mysqlEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `applicationEndpointInput`<sup>Optional</sup> <a name="applicationEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput"></a>

```typescript
public readonly applicationEndpointInput: string;
```

- *Type:* string

---

##### `databaseEndpointInput`<sup>Optional</sup> <a name="databaseEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput"></a>

```typescript
public readonly databaseEndpointInput: string;
```

- *Type:* string

---

##### `identityDomainInput`<sup>Optional</sup> <a name="identityDomainInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput"></a>

```typescript
public readonly identityDomainInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaEndpointInput`<sup>Optional</sup> <a name="javaEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput"></a>

```typescript
public readonly javaEndpointInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `mysqlEndpointInput`<sup>Optional</sup> <a name="mysqlEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput"></a>

```typescript
public readonly mysqlEndpointInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `applicationEndpoint`<sup>Optional</sup> <a name="applicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint"></a>

```typescript
public readonly applicationEndpoint: string;
```

- *Type:* string

---

##### `databaseEndpoint`<sup>Optional</sup> <a name="databaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint"></a>

```typescript
public readonly databaseEndpoint: string;
```

- *Type:* string

---

##### `identityDomain`<sup>Optional</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain"></a>

```typescript
public readonly identityDomain: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaEndpoint`<sup>Optional</sup> <a name="javaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint"></a>

```typescript
public readonly javaEndpoint: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `mysqlEndpoint`<sup>Optional</sup> <a name="mysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint"></a>

```typescript
public readonly mysqlEndpoint: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OraclepaasProviderConfig <a name="OraclepaasProviderConfig" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-oraclepaas'

const oraclepaasProviderConfig: provider.OraclepaasProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain">identityDomain</a></code> | <code>string</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password">password</a></code> | <code>string</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user">user</a></code> | <code>string</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint">applicationEndpoint</a></code> | <code>string</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint">databaseEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint">javaEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint">mysqlEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain"></a>

```typescript
public readonly identityDomain: string;
```

- *Type:* string

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#identity_domain OraclepaasProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#password OraclepaasProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#user OraclepaasProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#alias OraclepaasProvider#alias}

---

##### `applicationEndpoint`<sup>Optional</sup> <a name="applicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint"></a>

```typescript
public readonly applicationEndpoint: string;
```

- *Type:* string

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `databaseEndpoint`<sup>Optional</sup> <a name="databaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint"></a>

```typescript
public readonly databaseEndpoint: string;
```

- *Type:* string

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#insecure OraclepaasProvider#insecure}

---

##### `javaEndpoint`<sup>Optional</sup> <a name="javaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint"></a>

```typescript
public readonly javaEndpoint: string;
```

- *Type:* string

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#max_retries OraclepaasProvider#max_retries}

---

##### `mysqlEndpoint`<sup>Optional</sup> <a name="mysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint"></a>

```typescript
public readonly mysqlEndpoint: string;
```

- *Type:* string

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#mysql_endpoint OraclepaasProvider#mysql_endpoint}

---



