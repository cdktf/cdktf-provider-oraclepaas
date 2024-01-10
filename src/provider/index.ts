// https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OraclepaasProviderConfig {
  /**
  * The HTTP endpoint for the Oracle Application operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#application_endpoint OraclepaasProvider#application_endpoint}
  */
  readonly applicationEndpoint?: string;
  /**
  * The HTTP endpoint for Oracle Database operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#database_endpoint OraclepaasProvider#database_endpoint}
  */
  readonly databaseEndpoint?: string;
  /**
  * The OPAAS identity domain for API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#identity_domain OraclepaasProvider#identity_domain}
  */
  readonly identityDomain: string;
  /**
  * Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#insecure OraclepaasProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The HTTP endpoint for Oracle Java operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#java_endpoint OraclepaasProvider#java_endpoint}
  */
  readonly javaEndpoint?: string;
  /**
  * Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#max_retries OraclepaasProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The HTTP endpoint for Oracle MySQL operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#mysql_endpoint OraclepaasProvider#mysql_endpoint}
  */
  readonly mysqlEndpoint?: string;
  /**
  * The user password for OPAAS API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#password OraclepaasProvider#password}
  */
  readonly password: string;
  /**
  * The user name for OPAAS API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#user OraclepaasProvider#user}
  */
  readonly user: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#alias OraclepaasProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs oraclepaas}
*/
export class OraclepaasProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oraclepaas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OraclepaasProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OraclepaasProvider to import
  * @param importFromId The id of the existing OraclepaasProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OraclepaasProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oraclepaas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs oraclepaas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OraclepaasProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OraclepaasProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'oraclepaas',
      terraformGeneratorMetadata: {
        providerName: 'oraclepaas',
        providerVersion: '1.5.3',
        providerVersionConstraint: '~> 1.5'
      },
      terraformProviderSource: 'oraclepaas'
    });
    this._applicationEndpoint = config.applicationEndpoint;
    this._databaseEndpoint = config.databaseEndpoint;
    this._identityDomain = config.identityDomain;
    this._insecure = config.insecure;
    this._javaEndpoint = config.javaEndpoint;
    this._maxRetries = config.maxRetries;
    this._mysqlEndpoint = config.mysqlEndpoint;
    this._password = config.password;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_endpoint - computed: false, optional: true, required: false
  private _applicationEndpoint?: string; 
  public get applicationEndpoint() {
    return this._applicationEndpoint;
  }
  public set applicationEndpoint(value: string | undefined) {
    this._applicationEndpoint = value;
  }
  public resetApplicationEndpoint() {
    this._applicationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEndpointInput() {
    return this._applicationEndpoint;
  }

  // database_endpoint - computed: false, optional: true, required: false
  private _databaseEndpoint?: string; 
  public get databaseEndpoint() {
    return this._databaseEndpoint;
  }
  public set databaseEndpoint(value: string | undefined) {
    this._databaseEndpoint = value;
  }
  public resetDatabaseEndpoint() {
    this._databaseEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEndpointInput() {
    return this._databaseEndpoint;
  }

  // identity_domain - computed: false, optional: false, required: true
  private _identityDomain?: string; 
  public get identityDomain() {
    return this._identityDomain;
  }
  public set identityDomain(value: string | undefined) {
    this._identityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDomainInput() {
    return this._identityDomain;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // java_endpoint - computed: false, optional: true, required: false
  private _javaEndpoint?: string; 
  public get javaEndpoint() {
    return this._javaEndpoint;
  }
  public set javaEndpoint(value: string | undefined) {
    this._javaEndpoint = value;
  }
  public resetJavaEndpoint() {
    this._javaEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaEndpointInput() {
    return this._javaEndpoint;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // mysql_endpoint - computed: false, optional: true, required: false
  private _mysqlEndpoint?: string; 
  public get mysqlEndpoint() {
    return this._mysqlEndpoint;
  }
  public set mysqlEndpoint(value: string | undefined) {
    this._mysqlEndpoint = value;
  }
  public resetMysqlEndpoint() {
    this._mysqlEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlEndpointInput() {
    return this._mysqlEndpoint;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_endpoint: cdktf.stringToTerraform(this._applicationEndpoint),
      database_endpoint: cdktf.stringToTerraform(this._databaseEndpoint),
      identity_domain: cdktf.stringToTerraform(this._identityDomain),
      insecure: cdktf.booleanToTerraform(this._insecure),
      java_endpoint: cdktf.stringToTerraform(this._javaEndpoint),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      mysql_endpoint: cdktf.stringToTerraform(this._mysqlEndpoint),
      password: cdktf.stringToTerraform(this._password),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_endpoint: {
        value: cdktf.stringToHclTerraform(this._applicationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_endpoint: {
        value: cdktf.stringToHclTerraform(this._databaseEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_domain: {
        value: cdktf.stringToHclTerraform(this._identityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      java_endpoint: {
        value: cdktf.stringToHclTerraform(this._javaEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysql_endpoint: {
        value: cdktf.stringToHclTerraform(this._mysqlEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
