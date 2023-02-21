# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-oraclepaas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OraclepaasProvider <a name="OraclepaasProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas oraclepaas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.provider.OraclepaasProvider;

OraclepaasProvider.Builder.create(Construct scope, java.lang.String id)
    .identityDomain(java.lang.String)
    .password(java.lang.String)
    .user(java.lang.String)
//  .alias(java.lang.String)
//  .applicationEndpoint(java.lang.String)
//  .databaseEndpoint(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .javaEndpoint(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .mysqlEndpoint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.applicationEndpoint">applicationEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.databaseEndpoint">databaseEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.javaEndpoint">javaEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.mysqlEndpoint">mysqlEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.identityDomain"></a>

- *Type:* java.lang.String

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#identity_domain OraclepaasProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#password OraclepaasProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.user"></a>

- *Type:* java.lang.String

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#user OraclepaasProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#alias OraclepaasProvider#alias}

---

##### `applicationEndpoint`<sup>Optional</sup> <a name="applicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.applicationEndpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `databaseEndpoint`<sup>Optional</sup> <a name="databaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.databaseEndpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#insecure OraclepaasProvider#insecure}

---

##### `javaEndpoint`<sup>Optional</sup> <a name="javaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.javaEndpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#max_retries OraclepaasProvider#max_retries}

---

##### `mysqlEndpoint`<sup>Optional</sup> <a name="mysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.mysqlEndpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#mysql_endpoint OraclepaasProvider#mysql_endpoint}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApplicationEndpoint` <a name="resetApplicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint"></a>

```java
public void resetApplicationEndpoint()
```

##### `resetDatabaseEndpoint` <a name="resetDatabaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint"></a>

```java
public void resetDatabaseEndpoint()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetJavaEndpoint` <a name="resetJavaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint"></a>

```java
public void resetJavaEndpoint()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMysqlEndpoint` <a name="resetMysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint"></a>

```java
public void resetMysqlEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.provider.OraclepaasProvider;

OraclepaasProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.provider.OraclepaasProvider;

OraclepaasProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.provider.OraclepaasProvider;

OraclepaasProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput">applicationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput">databaseEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput">identityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput">javaEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput">mysqlEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint">applicationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint">databaseEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint">javaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint">mysqlEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `applicationEndpointInput`<sup>Optional</sup> <a name="applicationEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput"></a>

```java
public java.lang.String getApplicationEndpointInput();
```

- *Type:* java.lang.String

---

##### `databaseEndpointInput`<sup>Optional</sup> <a name="databaseEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput"></a>

```java
public java.lang.String getDatabaseEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityDomainInput`<sup>Optional</sup> <a name="identityDomainInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput"></a>

```java
public java.lang.String getIdentityDomainInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javaEndpointInput`<sup>Optional</sup> <a name="javaEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput"></a>

```java
public java.lang.String getJavaEndpointInput();
```

- *Type:* java.lang.String

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `mysqlEndpointInput`<sup>Optional</sup> <a name="mysqlEndpointInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput"></a>

```java
public java.lang.String getMysqlEndpointInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `applicationEndpoint`<sup>Optional</sup> <a name="applicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint"></a>

```java
public java.lang.String getApplicationEndpoint();
```

- *Type:* java.lang.String

---

##### `databaseEndpoint`<sup>Optional</sup> <a name="databaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint"></a>

```java
public java.lang.String getDatabaseEndpoint();
```

- *Type:* java.lang.String

---

##### `identityDomain`<sup>Optional</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain"></a>

```java
public java.lang.String getIdentityDomain();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `javaEndpoint`<sup>Optional</sup> <a name="javaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint"></a>

```java
public java.lang.String getJavaEndpoint();
```

- *Type:* java.lang.String

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `mysqlEndpoint`<sup>Optional</sup> <a name="mysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint"></a>

```java
public java.lang.String getMysqlEndpoint();
```

- *Type:* java.lang.String

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OraclepaasProviderConfig <a name="OraclepaasProviderConfig" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oraclepaas.provider.OraclepaasProviderConfig;

OraclepaasProviderConfig.builder()
    .identityDomain(java.lang.String)
    .password(java.lang.String)
    .user(java.lang.String)
//  .alias(java.lang.String)
//  .applicationEndpoint(java.lang.String)
//  .databaseEndpoint(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .javaEndpoint(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .mysqlEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user">user</a></code> | <code>java.lang.String</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint">applicationEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint">databaseEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint">javaEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint">mysqlEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain"></a>

```java
public java.lang.String getIdentityDomain();
```

- *Type:* java.lang.String

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#identity_domain OraclepaasProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#password OraclepaasProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#user OraclepaasProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#alias OraclepaasProvider#alias}

---

##### `applicationEndpoint`<sup>Optional</sup> <a name="applicationEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint"></a>

```java
public java.lang.String getApplicationEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `databaseEndpoint`<sup>Optional</sup> <a name="databaseEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint"></a>

```java
public java.lang.String getDatabaseEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#insecure OraclepaasProvider#insecure}

---

##### `javaEndpoint`<sup>Optional</sup> <a name="javaEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint"></a>

```java
public java.lang.String getJavaEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#max_retries OraclepaasProvider#max_retries}

---

##### `mysqlEndpoint`<sup>Optional</sup> <a name="mysqlEndpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint"></a>

```java
public java.lang.String getMysqlEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#mysql_endpoint OraclepaasProvider#mysql_endpoint}

---



