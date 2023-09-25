import { LitElement, html, css } from 'lit';

export class DBTLifeCycle extends LitElement {

    static get styles() {
        console.log(`DBTLifeCycle -> styles`)
        //this._triggerLog("styles")
        return css`
        `
    }
 
    static get properties() {
        console.log(`DBTLifeCycle -> properties`)
        //this._triggerLog("properties")
        return {
            isFirstUpdated: { type: Boolean, attribute: 'update-component' }
        }
    }
 
    constructor() {
        super()
        this.isFirstUpdated = true
        this._triggerLog("constructor")
    }

    connectedCallback() {
        super.connectedCallback()
        this._triggerLog("connectedCallback")
    }

    shouldUpdate(properties) {
        super.shouldUpdate(properties)
        this._triggerLog("shouldUpdate")
        return true
    }

    update(properties) {
        this._triggerLog("update (trigger before render)")
        super.update(properties)
        this._triggerLog("update (trigger after render)")
    }

    render() {
        this._triggerLog("render")
        return html`
            <p> ${this.isFirstUpdated} </p>

        `;
    }

    firstUpdated() {
        super.firstUpdated()
        this._triggerLog("firstUpdated")
    }

    willUpdate() {
        super.willUpdate()
        this._triggerLog("willUpdate")
    }

    updated(properties) {
        super.updated(properties)
        this._triggerLog("updated")
    }

    disconnectedCallback() { // Retain Cycle
        super.disconnectedCallback()
        this._triggerLog("disconnectedCallback")
    }

    _triggerLog(message) {
        message = `DBTLifeCycle -> ${message}`
        console.log(message)
    }
}

customElements.define('dbt-life-cycle', DBTLifeCycle);